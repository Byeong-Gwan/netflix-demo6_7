import React from 'react';
import { Modal } from 'react-bootstrap';

// Props:
// - show: boolean
// - onHide: function
// - youtubeKey: string (YouTube video id)
// - fullscreen: boolean (optional) => when true, open fullscreen
// - title: string (optional)
// - dark: boolean (optional) => dark background
const VideoModal = ({ show, onHide, youtubeKey, fullscreen = false, title = '예고편', dark = true }) => {
  if (!youtubeKey) return null;
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      fullscreen={!!fullscreen}
      contentClassName={dark ? 'bg-black' : ''}
      restoreFocus
    >
      <Modal.Body style={{ backgroundColor: dark ? '#000' : '#111', padding: 0 }}>
        <div style={{ maxWidth: fullscreen ? '100%' : 900, margin: '0 auto', padding: fullscreen ? '16px 16px 0' : 16 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              aria-label="Close"
              onClick={onHide}
              className="btn-close btn-close-white"
              style={{ position: 'static' }}
            />
          </div>
          <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
            <iframe
              title={title}
              src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-presentation"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, borderRadius: 12 }}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;
