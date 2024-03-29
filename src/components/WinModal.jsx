function WinModal({ toggleWin, setWinModal }) { 

    const closeModal = () => {
        setWinModal(false)
    }

    return (
        <>
            {toggleWin && (
                <div className='modal'>
                    <div className="overlay" onClick={closeModal}></div>
                    <div className="modal-content">
                        <h2>You Win HeHeHawhaw</h2>
                        <button className="close-modal" onClick={closeModal}>close</button>
                    </div>
                </div>)
            }
        </>
    )
}
export default WinModal;