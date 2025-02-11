import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Variáveis de ambiente não configuradas');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfólio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Mensagem de ${name} (portifólio)`,
      text: `
        Nome: ${name}\n
        Email: ${email}\n
        Mensagem: ${message}
      `,
      replyTo: email,
    });

    return NextResponse.json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro na API:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Erro interno no servidor' },
      { status: 500 }
    );
  }
}
