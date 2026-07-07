import { useState } from 'react';

type Page = 'home' | 'generator' | 'library' | 'profile';

function App() {
  const [page, setPage] = useState<Page>('home');

  return (
    <div
      style={{
        direction: 'rtl',
        fontFamily: 'Tajawal, sans-serif',
        minHeight: '100vh',
        background: '#0f172a',
        color: '#fff',
        padding: '40px'
      }}
    >
      <h1>🚀 Prompt Master 17</h1>

      <p>نسخة الاستعادة الأولية تعمل.</p>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}
      >
        <button onClick={() => setPage('home')}>الرئيسية</button>
        <button onClick={() => setPage('generator')}>مولد البرومبتات</button>
        <button onClick={() => setPage('library')}>المكتبة</button>
        <button onClick={() => setPage('profile')}>الملف الشخصي</button>
      </div>

      {page === 'home' && (
        <>
          <h2>الصفحة الرئيسية</h2>
          <p>مرحباً بك في Prompt Master 17.</p>
        </>
      )}

      {page === 'generator' && (
        <>
          <h2>Prompt Generator</h2>
          <textarea
            style={{
              width: '100%',
              height: '180px',
              padding: '10px'
            }}
            placeholder="اكتب فكرتك هنا..."
          />
        </>
      )}

      {page === 'library' && (
        <>
          <h2>Prompt Library</h2>
          <p>مكتبة البرومبتات ستكون هنا.</p>
        </>
      )}

      {page === 'profile' && (
        <>
          <h2>الملف الشخصي</h2>
          <p>بيانات المستخدم.</p>
        </>
      )}
    </div>
  );
}

export default App;
