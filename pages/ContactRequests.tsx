import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useTranslation } from '../hooks/useTranslation';

interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
}

const ContactRequests: React.FC = () => {
    const { t } = useTranslation();
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data, error } = await supabase
                    .from('contact_messages')
                    .select('*')
                    .order('created_at', { ascending: false });
                if (error) throw error;
                setMessages(data as ContactMessage[]);
            } catch (err) {
                console.error('Error fetching contact messages:', err);
                setError('Failed to load messages');
            } finally {
                setLoading(false);
            }
        };
        fetchMessages();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-6">{t('contactRequests.title', 'Contact Requests')}</h1>
            {loading && <p>{t('contactRequests.loading', 'Loading...')}</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && (
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="p-2 text-left">{t('contactRequests.name', 'Name')}</th>
                            <th className="p-2 text-left">{t('contactRequests.email', 'Email')}</th>
                            <th className="p-2 text-left">{t('contactRequests.subject', 'Subject')}</th>
                            <th className="p-2 text-left">{t('contactRequests.message', 'Message')}</th>
                            <th className="p-2 text-left">{t('contactRequests.date', 'Date')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((msg) => (
                            <tr key={msg.id} className="border-b border-gray-700">
                                <td className="p-2">{msg.name}</td>
                                <td className="p-2">{msg.email}</td>
                                <td className="p-2">{msg.subject}</td>
                                <td className="p-2">{msg.message}</td>
                                <td className="p-2">{new Date(msg.created_at).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ContactRequests;
