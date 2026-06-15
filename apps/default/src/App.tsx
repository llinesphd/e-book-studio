import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { createConversation, createAgentChat } from '@/lib/agent-chat/v2';
import { isToolUIPart } from 'ai';
import { ulid } from 'ulidx';
import { cn } from '@/lib/utils';

const AGENT_ID = '01KTW71MFNBVERRQ4T184H3QFS';
const HTTYAD_GRAPHIC = 'https://files.taskade.com/space-files/578a6afd-6f34-44f5-932a-03b80e433832/original/E-book-HTTYAD-graphic.png';
const DIGITAL_DRAGON = 'https://files.taskade.com/space-files/26add404-b343-49fc-ba27-03456eace84c/original/digitaldragonchaotic.png';
const PDF_URL = 'https://lisalines.com/wp-content/uploads/2026/06/How_to_Train_Your_AI_Dragon__A_Social_Scientists_Guide_to_Getting_Started.pdf';

type ChatInstance = ReturnType<typeof createAgentChat>;

function ActiveChat({ chat, onClose }: { chat: ChatInstance; onClose: () => void }) {
  const { messages, status, addToolApprovalResponse } = useChat({ chat, id: chat.id });
  const isSending = status === 'submitted' || status === 'streaming';
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isSending) return;
    setInput('');
    await chat.sendMessage({ id: ulid(), role: 'user', parts: [{ type: 'text', text }] });
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[360px] max-h-[580px] flex flex-col rounded-2xl shadow-2xl border border-border overflow-hidden bg-card">
      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-violet-700 to-indigo-700 text-white">
        <span className="text-2xl">🐉</span>
        <div className="flex-1">
          <div className="font-bold text-sm">Ask the Dragon</div>
          <div className="text-xs opacity-75">Your AI guide to this e-book</div>
        </div>
        <button onClick={onClose} className="text-white/70 hover:text-white text-lg leading-none">✕</button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background min-h-0 max-h-[400px]">
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground text-sm py-8 space-y-2">
            <div className="text-4xl">🐉</div>
            <p className="font-medium">The dragon stirs...</p>
            <p className="text-xs">Ask me anything about AI for research, grant writing, or job hunting.</p>
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
            <div className={cn('max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed', msg.role === 'user' ? 'bg-violet-600 text-white rounded-br-none' : 'bg-muted text-foreground rounded-bl-none')}>
              {msg.parts.map((part, i) => {
                if (part.type === 'text') return <span key={i} className="whitespace-pre-wrap">{part.text}</span>;
                if (isToolUIPart(part)) {
                  return (
                    <div key={i} className="text-xs opacity-70 italic">
                      <span>🔧 {part.toolName} [{part.state}]</span>
                      {part.state === 'approval-requested' && part.approval != null && (
                        <div className="flex gap-2 mt-1">
                          <button onClick={() => addToolApprovalResponse({ id: part.approval!.id, approved: true })} className="px-2 py-0.5 bg-green-600 text-white rounded text-xs">Approve</button>
                          <button onClick={() => addToolApprovalResponse({ id: part.approval!.id, approved: false })} className="px-2 py-0.5 bg-red-600 text-white rounded text-xs">Deny</button>
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}
        {isSending && (
          <div className="flex justify-start">
            <div className="bg-muted px-3 py-2 rounded-xl rounded-bl-none">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-2 p-3 border-t border-border bg-card">
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKey} placeholder="Ask the dragon..." disabled={isSending} className="flex-1 text-sm px-3 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-violet-500 text-foreground placeholder:text-muted-foreground disabled:opacity-50" />
        <button onClick={handleSend} disabled={isSending || !input.trim()} className="px-3 py-2 bg-violet-600 hover:bg-violet-700 disabled:opacity-40 text-white rounded-lg text-sm font-medium transition-colors">↑</button>
      </div>
    </div>
  );
}

function DragonChatButton() {
  const [chat, setChat] = useState<ChatInstance | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = async () => {
    if (chat) { setIsOpen(true); return; }
    setIsLoading(true);
    try {
      const { conversationId } = await createConversation(AGENT_ID);
      setChat(createAgentChat(AGENT_ID, conversationId));
      setIsOpen(true);
    } catch (e) { console.error('Failed to create conversation', e); }
    finally { setIsLoading(false); }
  };

  return (
    <>
      {isOpen && chat && <ActiveChat chat={chat} onClose={() => setIsOpen(false)} />}
      {!isOpen && (
        <button onClick={handleOpen} disabled={isLoading} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-2xl shadow-2xl hover:scale-110 transition-transform flex items-center justify-center disabled:opacity-70" title="Ask the Dragon">
          {isLoading ? <span className="animate-spin text-base">⟳</span> : '🐉'}
        </button>
      )}
    </>
  );
}



async function saveSignUp(name: string, email: string): Promise<void> {
  const now = new Date().toISOString();
  await fetch('/api/taskade/projects/ppnPeLK1zNG8VMWX/nodes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      '/text': name,
      '/attributes/@sgnm1': name,
      '/attributes/@sgem2': email,
      '/attributes/@sgdt3': now,
    }),
  });
}

function DownloadGate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName) { setError('Please enter your name.'); return; }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!emailOk) { setError('Please enter a valid email address.'); return; }
    setError('');
    setSaving(true);
    try {
      await saveSignUp(trimmedName, trimmedEmail);
    } catch {
      // Non-blocking — proceed to success even if save fails
    } finally {
      setSaving(false);
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-gradient-to-r from-violet-700 to-indigo-700 p-8 text-white shadow-xl text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold mb-2">You're all set, {name.split(' ')[0]}!</h2>
        <p className="text-violet-200 text-sm mb-6">Click below to download your free copy of the e-book.</p>
        <a
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-700 rounded-xl font-bold text-sm hover:bg-violet-50 transition-colors shadow-lg"
        >
          ⬇ Download Free PDF
        </a>
        <p className="text-violet-300 text-xs mt-4">
          Also sign up for the free 6-email series at{' '}
          <a href="https://lisalines.com/welcome/how-to-train-your-ai-dragon/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            lisalines.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-violet-500/30 bg-card shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-violet-700 to-indigo-700 p-6 flex items-center gap-5 text-white">
        <img src={HTTYAD_GRAPHIC} alt="E-book cover" className="w-20 h-20 rounded-xl object-cover flex-shrink-0 border-2 border-white/20" />
        <div>
          <h2 className="text-xl font-bold mb-1">Get the Complete E-Book</h2>
          <p className="text-violet-200 text-sm">Introduction + 6 Chapters + Epilogue · Free</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <p className="text-sm text-muted-foreground">Enter your details to access the free download.</p>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Name <span className="text-violet-400">*</span></label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Email address <span className="text-violet-400">*</span></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
          />
        </div>
        {error && <p className="text-red-400 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={saving}
          className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg disabled:opacity-70"
        >
          {saving ? 'One moment…' : 'Get My Free E-Book →'}
        </button>
        <p className="text-xs text-muted-foreground text-center">No spam. Your details are kept private.</p>
      </form>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${DIGITAL_DRAGON})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wide mb-6">🐉 Free E-Book · lisalines.com</div>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4">
              How to Train Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">AI Dragon</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-lg mb-8 leading-relaxed">A social scientist's guide to getting started with AI — practical, honest, and grounded in real research workflows.</p>
          </div>
          <div className="flex-shrink-0">
            <img src={HTTYAD_GRAPHIC} alt="How to Train Your AI Dragon" className="w-64 h-64 object-cover rounded-2xl shadow-2xl border border-white/10" />
          </div>
        </div>
        <div className="relative border-t border-white/10 bg-white/5">
          <div className="max-w-5xl mx-auto px-6 py-4 grid grid-cols-3 gap-4 text-center">
            {[{ label: 'Sections', value: '8' }, { label: 'For researchers', value: '✓' }, { label: 'Honest & practical', value: '✓' }].map((s) => (
              <div key={s.label}><div className="text-xl font-bold text-violet-300">{s.value}</div><div className="text-xs text-slate-400">{s.label}</div></div>
            ))}
          </div>
        </div>
      </div>

      {/* Author strip */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-2xl text-white font-bold shadow-lg">LL</div>
          <div>
            <p className="font-semibold text-foreground">Lisa M. Lines, PhD, MPH</p>
            <p className="text-sm text-muted-foreground">Public health researcher · Christchurch, New Zealand · <a href="https://lisalines.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">lisalines.com</a></p>
          </div>
          <div className="sm:ml-auto">
            <p className="text-sm text-muted-foreground italic max-w-sm">"I'm not here to convert you into an AI enthusiast. My aim is to give you enough working knowledge to make an informed decision."</p>
          </div>
        </div>
      </div>

      {/* Gated download */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <DownloadGate />
      </div>
    </div>
  );
}

const App: React.FC = function () {
  return (
    <div className="dark">
      <div className="min-h-screen bg-background text-foreground">
        <LandingPage />
        <DragonChatButton />
      </div>
    </div>
  );
};

export default App;


