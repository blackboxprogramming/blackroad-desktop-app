/**
 * BlackRoad Health Monitor - Cloudflare Worker
 *
 * Monitors deployment health, provides API health endpoint,
 * and runs scheduled checks for uptime monitoring.
 *
 * Copyright (c) 2024-2026 BlackRoad OS, Inc. All Rights Reserved.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return new Response(JSON.stringify({
        status: 'healthy',
        app: env.APP_NAME || 'blackroad-desktop',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        uptime: true,
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'X-BlackRoad-Service': 'health-monitor',
        },
      });
    }

    if (url.pathname === '/api/status') {
      return new Response(JSON.stringify({
        services: {
          desktop: 'operational',
          api: 'operational',
          worker: 'operational',
        },
        lastCheck: new Date().toISOString(),
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      name: 'BlackRoad Health Monitor',
      version: '1.0.0',
      endpoints: ['/api/health', '/api/status'],
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  },

  async scheduled(event, env, ctx) {
    const endpoints = (env.MONITOR_ENDPOINTS || '').split(',').filter(Boolean);

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, { method: 'GET' });
        if (!response.ok) {
          console.error(`Health check failed for ${endpoint}: ${response.status}`);
        }
      } catch (err) {
        console.error(`Health check error for ${endpoint}: ${err.message}`);
      }
    }
  },
};
