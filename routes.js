'use strict';

const Controllers = require('keyfob').load({ path: './controllers', fn: require });


module.exports = [
  { method: 'GET', path: '/', handler: Controllers.home.get },

  // Public routes for clients
  // ---------------------------------------------------------------------

  // Client auto-configuration
  { method: 'POST', path: '/config/user', config: Controllers.config.user },
  { method: 'POST', path: '/config/guest', config: Controllers.config.guest},
  { method: 'POST', path: '/config/bot', config: Controllers.config.bot },

  // Fetch ICE servers
  { method: 'GET', path: '/ice-servers', config: Controllers.ice },

  // Telemetry
  { method: 'POST', path: '/telemetry', config: Controllers.telemetry.client },


  // Internal routes for Prosody 
  // ---------------------------------------------------------------------
 
  // Telemetry
  { method: 'POST', path: '/prosody/telemetry', config: Controllers.telemetry.prosody },

  // Authentication
  { method: 'GET', path: '/prosody/auth/user', config: Controllers.auth.user },
  { method: 'GET', path: '/prosody/auth/guest', config: Controllers.auth.guest },
  { method: 'GET', path: '/prosody/auth/bot', config: Controllers.auth.bot }
]

