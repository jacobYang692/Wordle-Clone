function WinModal({ toggleWin, setWinModal}) { 

    const closeModal = () => {
        setWinModal(false)
    }

    return (
        <>
            {toggleWin && (
                <div className='win-modal'>
                    <div className="overlay" onClick={closeModal}></div>
                    <div className="win-modal-content">
                        <h2>You Win XD</h2>
                        <button className="close-modal" onClick={closeModal}>close</button>
                    </div>
                </div>)
            }
        </>
    )
}
export default WinModal;