'use client'
import { Container } from "./style"
import React, { use, useState } from 'react'
import { Modal, Button } from "react-bootstrap"
import Link from "next/link"
interface Speaker {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
}

const speakersData = [
  {
    id: 1,
    name: 'John Doe',
    title: "Desenvolvedor Front-End",
    bio: "John é um especialista em React e UI/UX com mais de 10 anos de experiência na indústria",
    image: '/images/palestrante1.avif'

  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Especialista em Inteligência Artificial',
    bio: 'Jane é líder de uma equipe de IA em uma das maiores empresas de tecnologia do mundo.',
    image: '/images/palestrante2.jpg',
  },
  {
    id: 3,
    name: 'Henry Foda',
    title: 'Lider técnico em Tech',
    bio: 'Henry é líder de uma equipe Técnica focada em desenvolvimento de tecnologia para ajudar multinacionais',
    image: '/images/palestrante3.jpg',
  },
]

function Speakers() {
  const [showModal, setShowModal] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const handleShowModal = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedSpeaker(null);
  }


  return (
    <Container className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Palestrantes</h2>
        <div className="row g-4">
          {speakersData.map((speaker) => (
            <div className="col-md-4" key={speaker.id}>
              <div className="card h-100">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{speaker.name}</h5>
                  <p className="card-text">{speaker.title}</p>
                  <Button
                    variant="primary"
                    onClick={() => handleShowModal(speaker)}
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {selectedSpeaker && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedSpeaker.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedSpeaker.image}
              alt={selectedSpeaker.name}
              className="img-fluid mb-3"
            />
            <h5>{selectedSpeaker.title}</h5>
            <p>{selectedSpeaker.bio}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <div className="d-flex justify-content-center align-items-center mt-3">
      <Link href="/" passHref>
        <Button variant="primary" style={{ marginLeft: "20px" }}>Voltar</Button>
      </Link>
      </div>
    </Container>
  );
};

export default Speakers