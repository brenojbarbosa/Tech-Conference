'use client'

import Link from 'next/link';
import {H1,Container} from "./style"

function Hero() {
  return (
    <Container className='bg-primary text-white text-center py-5'>
      <div className='container'>
        <H1 className='display-3 fw-bold mb-3'>Tech Conference 2025 🚀</H1>
        <p>O maior evento de tecnologia de 2025 · 12 de Outubro · São Paulo</p>
        <div className='d-flex justify-content-center align-items-center gap-4'>
          <Link href='/cadastro' className='btn btn-light btn-lg' style={{fontSize: "15px"}}>
            Inscreva-se agora
          </Link>
          <Link href='/palestrantes' className='btn btn-light btn-lg' style={{fontSize: "15px"}}>
          Ver Palestrantes
        </Link>
        </div>

       


      </div>

    </Container>
  )
}

export default Hero