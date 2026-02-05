// Language configuration with supported voices
const languageConfig = {
  en: {
    name: 'English',
    voices: ['en-US-AriaNeural', 'en-US-GuyNeural', 'en-GB-SoniaNeural'],
    default: 'en-US-AriaNeural'
  },
  hi: {
    name: 'Hindi',
    voices: ['hi-IN-MadhurNeural', 'hi-IN-SwaraNeural'],
    default: 'hi-IN-SwaraNeural'
  },
  bn: {
    name: 'Bengali',
    voices: ['bn-IN-BashkarNeural', 'bn-IN-TanushreeNeural'],
    default: 'bn-IN-TanushreeNeural'
  },
  as: {
    name: 'Assamese',
    voices: ['as-IN-PriyamNeural', 'as-IN-ParulNeural'],
    default: 'as-IN-ParulNeural'
  },
  ta: {
    name: 'Tamil',
    voices: ['ta-IN-JarvoiceNeural', 'ta-IN-PallaviNeural'],
    default: 'ta-IN-PallaviNeural'
  }
};

/**
 * Generate speech from text using Microsoft Edge TTS
 * @param {string} text - Text to convert to speech
 * @param {string} language - Language code (e.g., 'en', 'es', 'fr')
 * @param {Object} options - Additional options
 * @param {string} options.voice - Specific voice to use (optional)
 * @param {number} options.rate - Speech rate (0.5 to 2.0, default 1.0)
 * @param {number} options.pitch - Pitch level (0.5 to 2.0, default 1.0)
 * @returns {Promise<Buffer>} - Audio stream as buffer
 */
async function synthesizeSpeech(text, language = 'en', options = {}) {
  try {
    // Validate input
    if (!text || typeof text !== 'string') {
      throw new Error('Text input is required and must be a string');
    }

    if (text.trim().length === 0) {
      throw new Error('Text cannot be empty');
    }

    // Get language configuration
    const langConfig = languageConfig[language];
    if (!langConfig) {
      throw new Error(`Unsupported language: ${language}. Supported languages: ${Object.keys(languageConfig).join(', ')}`);
    }

    // Select voice
    const voice = options.voice || langConfig.default;
    if (!langConfig.voices.includes(voice)) {
      throw new Error(`Voice '${voice}' not available for language '${language}'`);
    }

    // Set default options
    const rate = options.rate || 1.0;
    const pitch = options.pitch || 1.0;

    // Validate rate and pitch
    if (rate < 0.5 || rate > 2.0) {
      throw new Error('Rate must be between 0.5 and 2.0');
    }
    if (pitch < 0.5 || pitch > 2.0) {
      throw new Error('Pitch must be between 0.5 and 2.0');
    }

    // Build SSML (Speech Synthesis Markup Language)
    const ssml = buildSSML(text, voice, rate, pitch);

    // Call Microsoft Edge TTS API
    const audioBuffer = await callEdgeTTS(ssml);

    return audioBuffer;
  } catch (error) {
    console.error('Error in synthesizeSpeech:', error.message);
    throw new Error(`TTS synthesis failed: ${error.message}`);
  }
}

/**
 * Build SSML for speech synthesis
 * @private
 */
function buildSSML(text, voice, rate, pitch) {
  const ratePercentage = ((rate - 1) * 100).toFixed(0);
  const pitchPercentage = ((pitch - 1) * 100).toFixed(0);

  return `
    <speak version="1.0" xml:lang="en-US">
      <voice name="${voice}">
        <prosody rate="${ratePercentage}%" pitch="${pitchPercentage}%">
          ${escapeXML(text)}
        </prosody>
      </voice>
    </speak>
  `.trim();
}

/**
 * Escape XML special characters
 * @private
 */
function escapeXML(text) {
  const xmlChars = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  return text.replace(/[&<>"']/g, char => xmlChars[char]);
}

/**
 * Call Microsoft Edge TTS API using native fetch
 * @private
 */
async function callEdgeTTS(ssml) {
  try {
    const response = await fetch('https://tts.speech.microsoft.com/cognitiveservices/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': 'audio-16khz-32kbitrate-mono-mp3'
      },
      body: ssml,
      timeout: 30000
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized - Check your API credentials');
      } else if (response.status === 400) {
        throw new Error('Bad request - Invalid SSML format');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - Please try again');
    }
    throw error;
  }
}

/**
 * Get available languages
 * @returns {Object} - Available languages with their voices
 */
function getAvailableLanguages() {
  const languages = {};
  Object.entries(languageConfig).forEach(([code, config]) => {
    languages[code] = {
      name: config.name,
      voices: config.voices,
      default: config.default
    };
  });
  return languages;
}

/**
 * Get available voices for a specific language
 * @param {string} language - Language code
 * @returns {Array} - Array of available voice names
 */
function getVoicesForLanguage(language) {
  const langConfig = languageConfig[language];
  if (!langConfig) {
    throw new Error(`Unsupported language: ${language}`);
  }
  return langConfig.voices;
}

/**
 * Get default voice for a language
 * @param {string} language - Language code
 * @returns {string} - Default voice name
 */
function getDefaultVoice(language) {
  const langConfig = languageConfig[language];
  if (!langConfig) {
    throw new Error(`Unsupported language: ${language}`);
  }
  return langConfig.default;
}

export {
  synthesizeSpeech,
  getAvailableLanguages,
  getVoicesForLanguage,
  getDefaultVoice,
  languageConfig
};
