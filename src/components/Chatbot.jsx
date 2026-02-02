import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Trash2 } from 'lucide-react';

const Chatbot = ({ currentDesign = 'dark' }) => {
  const isDark = currentDesign === 'dark';
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const MAX_CHARS = 4000;
  // Conversation history support enabled
  const API_ENDPOINT = 'https://ip4v75ijp4.execute-api.eu-north-1.amazonaws.com/prod/chat';
  const WELCOME_MESSAGE = "Hello! I am Julia Baucher's AI assistant. Ask me about her experience, projects, or skills.";

  // Load messages from sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem('chatbot-messages');
    const welcomeShown = sessionStorage.getItem('chatbot-welcome-shown');
    
    if (stored) {
      try {
        setMessages(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored messages');
      }
    }
    
    if (welcomeShown) {
      setHasShownWelcome(true);
    }
  }, []);

  // Save messages to sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('chatbot-messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Show welcome message on first open
  useEffect(() => {
    if (isOpen && !hasShownWelcome && messages.length === 0) {
      setMessages([{
        id: Date.now(),
        type: 'assistant',
        text: WELCOME_MESSAGE,
        timestamp: new Date().toISOString()
      }]);
      setHasShownWelcome(true);
      sessionStorage.setItem('chatbot-welcome-shown', 'true');
    }
  }, [isOpen, hasShownWelcome, messages.length]);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const sanitizeText = (text) => {
    // Treat all content as plain text
    return String(text || '').trim();
  };

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    
    if (!trimmedInput || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: sanitizeText(trimmedInput),
      timestamp: new Date().toISOString()
    };

    // Optimistic UI - add user message immediately
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Get recent conversation history (last 6 messages = 3 exchanges)
      // Use messages (before current message) for conversation history
      const recentMessages = messages.slice(-6).map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      console.log('=== CONVERSATION DEBUG ===');
      console.log('Current messages array length:', messages.length);
      console.log('Recent messages (last 6):', messages.slice(-6));
      console.log('Mapped conversation_history:', recentMessages);
      console.log('Sending to API:', { message: trimmedInput, conversation_history: recentMessages });
      console.log('========================');

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: trimmedInput,
          conversation_history: recentMessages
        })
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);
      
      // Extract assistant response from various possible fields
      const assistantText = data.reply ?? data.response ?? data.assistant ?? data.message ?? 'Sorry, I could not process your request.';

      console.log('Extracted assistant text:', assistantText);

      const assistantMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        text: sanitizeText(assistantText),
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      
      const errorMessage = {
        id: Date.now() + 1,
        type: 'error',
        text: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: Date.now(),
      type: 'assistant',
      text: WELCOME_MESSAGE,
      timestamp: new Date().toISOString()
    }]);
    sessionStorage.removeItem('chatbot-messages');
    inputRef.current?.focus();
  };

  const charCount = input.length;
  const isNearLimit = charCount > MAX_CHARS * 0.8;
  const isOverLimit = charCount > MAX_CHARS;

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-6 w-96 max-h-[85vh] rounded-lg shadow-2xl flex flex-col z-50 ${
            isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
          }`}
          style={{ maxWidth: 'calc(100vw - 3rem)' }}
        >
          {/* Header */}
          <div className={`flex items-center justify-between p-4 border-b ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <MessageCircle className={`w-5 h-5 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`} />
              </div>
              <div>
                <h3 className={`font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Julia's AI Assistant
                </h3>
                <p className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div
            ref={chatContainerRef}
            className={`flex-1 overflow-y-auto p-4 space-y-4 ${
              isDark ? 'bg-gray-950' : 'bg-gray-50'
            }`}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 break-words whitespace-pre-wrap ${
                    message.type === 'user'
                      ? isDark
                        ? 'bg-white text-black'
                        : 'bg-gray-900 text-white'
                      : message.type === 'error'
                      ? 'bg-red-100 text-red-900 border border-red-200'
                      : isDark
                      ? 'bg-gray-800 text-gray-100'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className={`rounded-lg p-3 ${
                  isDark ? 'bg-gray-800' : 'bg-white border border-gray-200'
                }`}>
                  <div className="flex gap-1">
                    <div className={`w-2 h-2 rounded-full animate-bounce ${
                      isDark ? 'bg-gray-400' : 'bg-gray-600'
                    }`} style={{ animationDelay: '0ms' }}></div>
                    <div className={`w-2 h-2 rounded-full animate-bounce ${
                      isDark ? 'bg-gray-400' : 'bg-gray-600'
                    }`} style={{ animationDelay: '150ms' }}></div>
                    <div className={`w-2 h-2 rounded-full animate-bounce ${
                      isDark ? 'bg-gray-400' : 'bg-gray-600'
                    }`} style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={`p-4 border-t ${
            isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
          }`}>
            <div className="flex gap-2 mb-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_CHARS))}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                rows={2}
                disabled={isLoading}
                className={`flex-1 p-2 rounded-lg resize-none focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-gray-600'
                    : 'bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-gray-300 border border-gray-200'
                }`}
                aria-label="Chat message input"
              />
              <div className="flex flex-col gap-2">
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading || isOverLimit}
                  className={`p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    isDark
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
                <button
                  onClick={clearChat}
                  disabled={isLoading}
                  className={`p-2 rounded-lg transition-colors disabled:opacity-50 ${
                    isDark
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                  aria-label="Clear chat"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Character Counter */}
            <div className={`text-xs text-right ${
              isOverLimit
                ? 'text-red-500'
                : isNearLimit
                ? 'text-yellow-500'
                : isDark
                ? 'text-gray-500'
                : 'text-gray-400'
            }`}>
              {charCount} / {MAX_CHARS}
            </div>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50 ${
            isDark
              ? 'bg-white text-black hover:bg-gray-200'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Chatbot;
