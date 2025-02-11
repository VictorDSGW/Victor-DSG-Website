import React, { useState } from 'react';
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório").max(50, "Limite de caracteres atingido"),
  email: z.string().email("Email inválido"),
  message: z.string().min(5, "A mensagem deve ter no mínimo 5 caracteres")
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const { data } = await axios.post('/api/send-email', values);
      toast.success(data.message);
      form.reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Erro desconhecido");
      } else {
        toast.error("Erro inesperado");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="font-(family-name:--font-typeWriter) xl:w-1/3">
      <CardHeader className="text-center">
        <h2>CONTATO</h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Nome:</FormLabel>
                    <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="Seu email" {...field} />
                    </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Mensagem:</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Tell us a little bit about yourself"
                        {...field}
                        />
                    </FormControl>
                    </FormItem>
                )}
            />
            <Button 
              type="submit" 
              className="w-full mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
