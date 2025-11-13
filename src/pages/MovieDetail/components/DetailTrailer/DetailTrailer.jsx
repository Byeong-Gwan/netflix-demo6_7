import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DetailTrailer = ({ videos = [] }) => {
  const trailer = videos.find(v => v.type === 'Trailer' && v.site === 'YouTube') || videos[0];
  if (!trailer || trailer.site !== 'YouTube') return null;
  const [show, setShow] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="detail-trailer">
      <h4>예고편</h4>
      {!show ? (
        <button
          className="btn-solid"
          onClick={() => { setShow(true); setShowModal(true); }}
        >
          재생
        </button>
      ) : (
        <>
          <Modal
            show={showModal}
            onHide={() => { setShowModal(false); setShow(false); }}
            centered
            fullscreen
            contentClassName="bg-black"
            unmountOnClose
          >
            <Modal.Body style={{ backgroundColor: '#000', padding: 0 }}>
              <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 16px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={() => { setShowModal(false); setShow(false); }}
                    className="btn-close btn-close-white"
                    style={{ position: 'static' }}
                  />
                </div>
                <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                  <iframe
                    title="trailer"
                    key={`yt-${trailer.key}-${showModal ? 'open' : 'closed'}`}
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, borderRadius: 12 }}
                  />
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
      )}
    </div>
  );
};
export default DetailTrailer;