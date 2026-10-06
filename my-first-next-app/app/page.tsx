import Link from 'next/link';

export default function HomePage() {
    return (
        <main style={{ padding: '20px', fontFamily: 'sans-serif', lineHeight: 1.6 }}>
            <h1>Главная</h1>
            <ul>
                <li><Link href="/blog/nextjs-vvedenie">Введение в Next.js</Link></li>
                <li><Link href="/blog/react-osnovy">Основы React</Link></li>
                <li><Link href="/about">О проекте (с Client Component)</Link></li>
                <li><Link href="/api/hello">API: /api/hello</Link></li>
            </ul>
        </main>
    );
}
