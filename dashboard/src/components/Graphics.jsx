import "./graphics.css";

export default function Graphics() {
  return (
    <div className="graphic-container">
      <h1>Gráfico de receitas</h1>
      <div className="graphic-data">
        <div className="graphic-content">
          <p>2000</p>
          <p>1000</p>
          <p>500</p>
          <p>250</p>
          <p>0</p>
        </div>
        <div className="">
          <div className="graphic-month">
            <div className="graphic-fev" />
            <div className="graphic-mar" />
            <div className="graphic-abr" />
            <div className="graphic-mai" />
            <div className="graphic-jun" />
            <div className="graphic-jul" />
            <div className="graphic-ago" />
          </div>
          <div className="graphic-labels">
            <p>Fev</p>
            <p>Mar</p>
            <p>Abr</p>
            <p>Mai</p>
            <p>Jun</p>
            <p>Jul</p>
            <p>Ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
