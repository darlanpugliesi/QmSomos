import React from 'react';
import '../css/InfoP1.css';

function InfoP1() {
  return (
    <div className="info-p1">
      <div className="payment-info-container">
        <div className="shipping-info">
          <span role="img" aria-label="location">📍</span> Enviar para Rua Bacana 23
        </div>
        <div className="store-info">
          <div>Loja oficial <a href="#">Ana artesanato</a></div>
          <div>+100mil vendas</div>
        </div>
        <div className="stock-info">
          <strong>Estoque disponível</strong>
          <div>Quantidade: <strong>1 unidade</strong> (100 disponíveis)</div>
        </div>
        <div className="payment-methods">
          <strong>Meios de pagamento</strong>
          <div className="credit-cards">
            <span>Cartões de crédito</span>
            <div>
              <img src={require('../assets/visa.png')} alt="Visa" />
              <img src={require('../assets/mastercard.png')} alt="Mastercard" />
              <img src={require('../assets/hipercard.png')} alt="Hipercard" />
              <img src={require('../assets/elo.png')} alt="Elo" />
            </div>
          </div>
          <div className="debit-cards">
            <span>Cartões de débito</span>
            <div>
              <img src={require('../assets/CAIXA.png')} alt="Caixa" />
            </div>
          </div>
          <div className="bank-slip">
            <span>Boleto bancário</span>
            <div>
              <img src={require('../assets/BOLETO.png')} alt="Boleto" />
            </div>
          </div>
          <a href="#" className="other-methods">Conheça outros meios de pagamento</a>
        </div>
        <button className="buy-now">Comprar agora</button>
        <button className="add-to-cart">Adicionar ao carrinho</button>
        <div className="additional-info">
          <div>📦 <strong>Devolução grátis.</strong> Você tem 7 dias a partir da data de recebimento.</div>
          <div>🛡️ <strong>Compra Garantida,</strong> receba o produto que está esperando ou devolvemos o dinheiro.</div>
          <div>💎 <strong>Mercado Pontos.</strong> Você acumula 249 pontos.</div>
          <div>🛠️ <strong>12 meses de garantia de fábrica.</strong></div>
        </div>
      </div>
    </div>
  );
}

export default InfoP1;
