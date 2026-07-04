export default function App() {
  const prompts = [
    {
      title: "Dam Design Expert",
      category: "Engineering",
      description: "Professional dam engineering prompt"
    },
    {
      title: "Prompt Generator",
      category: "AI",
      description: "Generate professional prompts"
    },
    {
      title: "Marketing Expert",
      category: "Business",
      description: "Marketing and sales prompts"
    }
  ];

  return (
    <div style={{
      padding: "30px",
      fontFamily: "Arial"
    }}>
      <h1>🚀 Prompt Master 17</h1>
      <p>AI Prompt Engineering Platform</p>

      <h2>Prompt Library</h2>

      {prompts.map((p, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px"
          }}
        >
          <h3>{p.title}</h3>
          <b>{p.category}</b>
          <p>{p.description}</p>
          <button>Open Prompt</button>
        </div>
      ))}
    </div>
  );
}
