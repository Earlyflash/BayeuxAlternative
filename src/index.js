// Serves the static site, sending www.theotherbayeux.uk to the bare domain.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice(4);
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
