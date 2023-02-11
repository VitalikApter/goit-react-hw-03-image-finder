import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        children: PropTypes.node,
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
    
      handleKeyDown = evt => {
        if (evt.code === 'Escape') {
          this.props.onClose();
        }
      };
    
      handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
          this.props.onClose();
        }
      };
  render() {
    return createPortal(
        <div className={css.Overlay} onClick={this.handleBackdropClick}>
          <div className={css.Modal}>{this.props.children}</div>
        </div>,
        modalRoot
    );
  }
}

export default Modal;