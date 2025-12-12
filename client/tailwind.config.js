/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class', '[data-theme="dark"]'],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'primary-soft': 'var(--color-primary-soft)',
                'bg-app': 'var(--color-bg-app)',
                'bg-sidebar': 'var(--color-bg-sidebar)',
                'bg-chat': 'var(--color-bg-chat)',
                surface: 'var(--color-surface)',
                'text-main': 'var(--color-text-main)',
                'text-muted': 'var(--color-text-muted)',
                border: 'var(--color-border)',
                'msg-out': 'var(--color-msg-out)',
                'msg-in': 'var(--color-msg-in)',
                'status-online': 'var(--color-status-online)',
            },
            backgroundImage: {
                'chat-pattern': "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
            }
        },
    },
    plugins: [],
}
