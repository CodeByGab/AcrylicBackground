import './index.scss';

function MainContentSheet() {
  return (
    <div className='container-sheet'>
      <div className="container-status">
        <div className="container-name">
          <span>Status do personagem</span>
        </div>
        <div className="container-content">
          <div className="chac-pic">
            <img src="./src/img/Cassandra.png" alt="Portrait do personagem" />
          </div>
          <div className="name-hp">
            <div className="chac-name">
              Cassandra Di Angelo
            </div>
            <div className="chac-hp">
              <div className="chac-hp-bar">
                <span>VIDA:</span>
              </div>
              <div className="chac-hp-bar">

              </div>
              <div className="chac-hp-bar">

              </div>
            </div>
          </div>
          <div className="atributos">
            123123
          </div>
          <div className="lvl-status">
            12312312
          </div>
          <div className="base-status">
            123123
          </div>
          <div className="protect-status">
            1231231
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContentSheet;