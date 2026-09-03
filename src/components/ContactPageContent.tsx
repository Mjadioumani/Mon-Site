"use client";

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/components/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Reveal } from '@/components/motion/Reveal';
import { Footer } from '@/components/Footer';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactPageContent() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t.contact.nameRequired),
        email: z.string().email(t.contact.emailInvalid),
        message: z.string().min(10, t.contact.messageRequired),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Formspree request failed');
      } else {
        const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
        window.location.href = `mailto:adioumani1972@gmail.com?subject=${subject}&body=${body}`;
      }

      toast({ title: t.contact.successTitle, description: t.contact.successDesc });
      reset();
    } catch {
      toast({ title: t.contact.errorTitle, description: t.contact.errorDesc, variant: 'destructive' });
    }
  };

  return (
    <section className="py-12 md:py-24 space-y-20 min-h-screen flex flex-col">
      {/* Page Title */}
      <Reveal variant="up">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">{t.contact.title}</h1>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 flex-grow">
        {/* Left Column: Form */}
        <Reveal variant="left" className="space-y-8">
          <h3 className="text-lg font-bold text-white tracking-wide">{t.contact.messageMe}</h3>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder={t.contact.name}
                  aria-invalid={!!errors.name}
                  className="bg-[#141414] border-none h-14 px-5 text-[13px] focus-visible:ring-2 focus-visible:ring-primary/60"
                  {...register('name')}
                />
                {errors.name && <p className="text-destructive text-[11px] mt-1.5">{errors.name.message}</p>}
              </div>
              <div>
                <Input
                  placeholder={t.contact.email}
                  type="email"
                  aria-invalid={!!errors.email}
                  className="bg-[#141414] border-none h-14 px-5 text-[13px] focus-visible:ring-2 focus-visible:ring-primary/60"
                  {...register('email')}
                />
                {errors.email && <p className="text-destructive text-[11px] mt-1.5">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <Textarea
                placeholder={t.contact.message}
                aria-invalid={!!errors.message}
                className="bg-[#141414] border-none min-h-[220px] p-5 text-[13px] focus-visible:ring-2 focus-visible:ring-primary/60 resize-none"
                {...register('message')}
              />
              {errors.message && <p className="text-destructive text-[11px] mt-1.5">{errors.message.message}</p>}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 font-bold text-[13px] uppercase tracking-widest rounded-xl transition-all disabled:opacity-60"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> {t.contact.sending}
                </span>
              ) : (
                t.contact.send
              )}
            </Button>
          </form>
        </Reveal>

        {/* Right Column: Info */}
        <Reveal variant="right" className="space-y-16">
          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-white tracking-wide">{t.contact.contactTitle}</h3>
            <div className="space-y-6">
              <a href="mailto:adioumani1972@gmail.com" data-cursor-hover className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[13px] font-medium tracking-wide">adioumani1972@gmail.com</span>
              </a>
              <a href="tel:+2250170505903" data-cursor-hover className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[13px] font-medium tracking-wide">+225 01 70 50 59 03</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-white tracking-wide">{t.contact.socialTitle}</h3>
            <div className="space-y-6">
              <a href="https://www.linkedin.com/in/adioumani-jean-martinien-fabrice" target="_blank" rel="noopener noreferrer" data-cursor-hover className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[13px] font-medium tracking-wide">LinkedIn</span>
              </a>
              <a href="https://github.com/Mjadioumani" target="_blank" rel="noopener noreferrer" data-cursor-hover className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[13px] font-medium tracking-wide">GitHub</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
}
