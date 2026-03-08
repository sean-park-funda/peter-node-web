'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function DemoForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
        <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name *</label>
          <input type="text" id="name" name="name" required placeholder="John Kim"
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
          <input type="email" id="email" name="email" required placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">Company</label>
        <input type="text" id="company" name="company" placeholder="Acme Corp"
          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
        <textarea id="message" name="message" rows={4} placeholder="Tell us about your use case..."
          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none" />
      </div>
      <button type="submit" disabled={status === 'loading'}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
        {status === 'loading' ? 'Sending...' : 'Send Request'} <Send className="w-5 h-5" />
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
