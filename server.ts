import next from 'next';
import { createServer } from 'http';
import { parse } from 'url';


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    const { pathname, query } = parsedUrl;


    // Check if request is for admin subdomain or localhost
    const host = req.headers.host;
    if (host && (host.startsWith('admin.') || host.split('.')[0] === 'admin')) {
      // Handle admin routes or localhost routes
      // TODO: authenticate the route
      // For example, you can redirect to different pages for admin routes or localhost routes
      // Modify this according to your admin section implementation
      app.render(req, res, '/admin', query);
    } else if (host && host.split('.')[0] === 'docs') {
      // TODO: auth require for paycode documentation
      // only require if you wanted to submit an issue report
      // but cache for performance and better user experience
      console.log(pathname, query, parsedUrl, "=== from server.ts file")
      app.render(req, res, '/docs', query);
    } if (host && (host.startsWith('blog.') || host.split('.')[0] === 'blog')) {
      // No auth required
      // only required when commentin g on the blog post
      app.render(req, res, '/blog', query);
    }else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err?: Error) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
