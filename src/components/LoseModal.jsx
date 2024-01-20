function LoseModal({ toggleLose, setLoseModal, correctWord }) { 

    const closeModal = () => {
        setLoseModal(false)
    }

    return (
        <>
            {toggleLose && (
                <div className='modal'>
                    <div className="overlay" onClick={closeModal}></div>
                    <div className="modal-content">
                        <h2>You Lose HeHeHaha</h2>
                        <h2>The Correct Word was {correctWord}</h2>
                        <button className="close-modal" onClick={closeModal}>close</button>
                    </div>
                </div>)
            }
        </>
    )
}
export default LoseModal;