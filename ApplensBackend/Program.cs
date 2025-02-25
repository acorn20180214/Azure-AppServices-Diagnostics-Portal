﻿using System;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Security.Cryptography.X509Certificates;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace AppLensV3
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            var config = new ConfigurationBuilder()
            .AddCommandLine(args)
            .Build();

            var assemblyName = typeof(Startup).GetTypeInfo().Assembly.FullName;

            var webHostBuilder = Host.CreateDefaultBuilder(args).ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseConfiguration(config);
                webBuilder.UseStartup(assemblyName);
            });
                

            if (config.GetValue<bool>("useHttps"))
            {
                var store = new X509Store(StoreName.My, StoreLocation.CurrentUser);
                store.Open(OpenFlags.ReadOnly);
                var serverCertificate = store.Certificates[0];
                webHostBuilder = Host.CreateDefaultBuilder(args).ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseKestrel(options =>
                    {
                        options.Listen(IPAddress.Loopback, 5001, listenOptions =>
                        {
                            listenOptions.UseHttps(serverCertificate);
                        });
                    });
                    webBuilder.UseConfiguration(config);
                    webBuilder.UseStartup(assemblyName);
                });
            }

            return webHostBuilder;
        }
    }
}
