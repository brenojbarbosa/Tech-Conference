'use client';
import { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Container } from "./style"
import Link from "next/link"

interface FormData {
    name: string;
    email: string;
    message: string;
}

const RegisterForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório.';
        if (!formData.email.trim()) {
            newErrors.email = 'E-mail é obrigatório.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'E-mail inválido.';
        }
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <Container className="container py-5">
            <h2 className="mb-4">Inscreva-se no Evento</h2>

            {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                    Inscrição enviada com sucesso!
                </Alert>
            )}

            <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nome *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Seu nome"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>E-mail *</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Seu e-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Mensagem (opcional)</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Diga algo sobre você ou seu interesse"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button type="submit" variant="primary" disabled={loading}>
                    {loading ? <Spinner animation="border" size="sm" /> : 'Enviar'}
                </Button>
                <Link href="/" passHref>
                    <Button variant="primary" style={{marginLeft:"20px"}}>Voltar</Button>
                </Link>
            </Form>

        </Container>
    );
};

export default RegisterForm;
