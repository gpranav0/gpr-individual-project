import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
<<<<<<< HEAD
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^React$' }],
      'react-hooks/set-state-in-effect': 'off',
      'react-refresh/only-export-components': 'off'
    },
=======
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
>>>>>>> 80aae629ef7d66596e0325107301093c0d86c487
  },
])
