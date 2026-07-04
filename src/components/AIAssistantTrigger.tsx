"use client";

import { useState } from 'react';
import { Sparkles, X, Wand2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { generatePortfolioContent } from '@/ai/flows/generate-portfolio-content-flow';
import { useToast } from '@/hooks/use-toast';

export function AIAssistantTrigger() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const data = await generatePortfolioContent({
        contentType: formData.get('contentType') as any || 'project_description',
        task: formData.get('task') as any || 'generate_ideas',
        existingContent: formData.get('existingContent') as string,
        additionalInstructions: formData.get('additionalInstructions') as string,
      });
      setResult(data.generatedContent);
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating your content.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 gap-2">
          <Sparkles className="w-4 h-4" />
          AI Content Assistant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card border-primary/20 text-foreground">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Patricia's AI Assistant
          </DialogTitle>
          <DialogDescription>
            Refine your project descriptions or generate creative ideas for your portfolio.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleGenerate} className="space-y-6 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contentType">Content Type</Label>
              <Select name="contentType" defaultValue="project_description">
                <SelectTrigger id="contentType">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="project_description">Project Description</SelectItem>
                  <SelectItem value="about_section">About Section</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="task">Task</Label>
              <Select name="task" defaultValue="refine_content">
                <SelectTrigger id="task">
                  <SelectValue placeholder="Select task" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="refine_content">Refine Content</SelectItem>
                  <SelectItem value="generate_ideas">Generate Ideas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="existingContent">Existing Content (Optional)</Label>
            <Textarea 
              id="existingContent" 
              name="existingContent"
              placeholder="Paste your draft here..." 
              className="min-h-[100px] bg-background/50 border-border/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInstructions">Additional Instructions</Label>
            <Input 
              id="additionalInstructions" 
              name="additionalInstructions"
              placeholder="e.g., make it more punchy, focus on technology..." 
              className="bg-background/50 border-border/50"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            {loading ? <RefreshCw className="w-4 h-4 animate-spin mr-2" /> : <Wand2 className="w-4 h-4 mr-2" />}
            {loading ? 'Generating...' : 'Enhance My Content'}
          </Button>
        </form>

        {result && (
          <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20 animate-in fade-in slide-in-from-top-2">
            <h4 className="text-sm font-semibold text-primary mb-2 flex items-center justify-between">
              Result
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 text-xs" 
                onClick={() => {
                  navigator.clipboard.writeText(result);
                  toast({ description: "Copied to clipboard" });
                }}
              >
                Copy
              </Button>
            </h4>
            <div className="text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">
              {result}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}