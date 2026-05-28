using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var siteRoot = app.Environment.ContentRootPath;
var siteFiles = new PhysicalFileProvider(siteRoot);

var defaultFiles = new DefaultFilesOptions
{
    FileProvider = siteFiles,
};
defaultFiles.DefaultFileNames.Clear();
defaultFiles.DefaultFileNames.Add("index.html");

app.UseDefaultFiles(defaultFiles);
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = siteFiles,
});

app.MapFallback(async context =>
{
    context.Response.ContentType = "text/html; charset=utf-8";
    await context.Response.SendFileAsync(Path.Combine(siteRoot, "index.html"));
});

app.Run();
