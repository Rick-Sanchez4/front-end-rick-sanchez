// Vercel serverless function for Angular SSR
export default async (req, res) => {
  try {
    // Dynamic import of the ES module server
    const serverModule = await import('../dist/angular-front-end/server/server.mjs');
    const handler = serverModule.reqHandler;
    
    if (handler) {
      return handler(req, res);
    }
    
    res.status(500).json({ error: "Server handler not found" });
  } catch (error) {
    console.error('Error loading server module:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
};

