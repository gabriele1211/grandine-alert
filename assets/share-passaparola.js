(() => {
  "use strict";

  const APP_URL = "https://gabriele1211.github.io/grandine-alert/";
  const QR_URL = "./assets/grandine-alert-qr.svg";
  const INFO_LABEL = "Spiegazione dei pulsanti Radar e Rischio";
  const STYLE_ID = "ga-passaparola-style";
  const MODAL_ID = "ga-share-modal";

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .navHelpSheet { max-height: min(88dvh, 760px); overflow-y: auto; }
      .gaPassaparola {
        display: grid;
        grid-template-columns: 92px minmax(0, 1fr);
        gap: 14px;
        align-items: center;
        margin: 18px 0 14px;
        padding: 14px;
        border: 1px solid rgba(84, 205, 255, .25);
        border-radius: 18px;
        background: linear-gradient(145deg, rgba(7, 42, 67, .96), rgba(8, 27, 45, .98));
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, .05);
      }
      .gaPassaparolaQr {
        width: 92px;
        height: 92px;
        display: block;
        padding: 7px;
        border-radius: 12px;
        background: #fff;
        box-sizing: border-box;
      }
      .gaPassaparolaCopy { min-width: 0; }
      .gaPassaparolaCopy small {
        display: block;
        margin: 0 0 4px;
        color: #60d8ff;
        font-weight: 800;
        letter-spacing: .12em;
      }
      .gaPassaparolaCopy strong {
        display: block;
        color: #fff;
        font-size: 1rem;
        line-height: 1.2;
      }
      .gaPassaparolaCopy span {
        display: block;
        margin-top: 5px;
        color: rgba(233, 246, 255, .78);
        font-size: .78rem;
        line-height: 1.35;
      }
      .gaPassaparolaOpen {
        grid-column: 1 / -1;
        width: 100%;
        min-height: 46px;
        margin: 0;
        border: 1px solid rgba(91, 218, 255, .4);
        border-radius: 13px;
        color: #031521;
        background: linear-gradient(135deg, #78e3ff, #47bff5);
        font: inherit;
        font-weight: 900;
        cursor: pointer;
      }
      .gaShareModal {
        position: fixed;
        inset: 0;
        z-index: 100000;
        display: grid;
        place-items: center;
        padding: max(18px, env(safe-area-inset-top)) 18px max(18px, env(safe-area-inset-bottom));
        background: rgba(1, 12, 21, .84);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }
      .gaShareSheet {
        position: relative;
        width: min(100%, 390px);
        max-height: 90dvh;
        overflow-y: auto;
        padding: 25px 20px 20px;
        box-sizing: border-box;
        border: 1px solid rgba(93, 216, 255, .26);
        border-radius: 24px;
        text-align: center;
        color: #edf9ff;
        background: linear-gradient(160deg, #0a304d, #061b2d 58%, #041522);
        box-shadow: 0 24px 70px rgba(0, 0, 0, .52);
      }
      .gaShareClose {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 38px;
        height: 38px;
        border: 1px solid rgba(255, 255, 255, .16);
        border-radius: 50%;
        color: #fff;
        background: rgba(255, 255, 255, .08);
        font-size: 1.55rem;
        line-height: 1;
        cursor: pointer;
      }
      .gaShareEyebrow {
        display: inline-block;
        margin-bottom: 7px;
        color: #5bd7ff;
        font-size: .72rem;
        font-weight: 900;
        letter-spacing: .16em;
      }
      .gaShareSheet h2 { margin: 0; color: #fff; font-size: 1.55rem; }
      .gaShareSheet p {
        margin: 9px auto 15px;
        max-width: 310px;
        color: rgba(234, 247, 255, .78);
        font-size: .9rem;
        line-height: 1.45;
      }
      .gaShareQrWrap {
        width: min(76vw, 270px);
        margin: 0 auto 13px;
        padding: 13px;
        box-sizing: border-box;
        border-radius: 20px;
        background: #fff;
        box-shadow: 0 12px 35px rgba(0, 0, 0, .34);
      }
      .gaShareQrWrap img { display: block; width: 100%; height: auto; }
      .gaShareUrl {
        display: block;
        margin: 0 auto 16px;
        overflow: hidden;
        color: #8ce7ff;
        font-size: .76rem;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .gaShareActions { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      .gaShareAction {
        min-height: 48px;
        padding: 10px 12px;
        border: 1px solid rgba(99, 219, 255, .34);
        border-radius: 14px;
        color: #eaf9ff;
        background: rgba(50, 163, 213, .13);
        font: inherit;
        font-weight: 850;
        cursor: pointer;
      }
      .gaShareActionPrimary {
        color: #031521;
        border-color: transparent;
        background: linear-gradient(135deg, #7be6ff, #43bdf3);
      }
      .gaShareFeedback {
        min-height: 1.25em;
        margin: 12px 0 0 !important;
        color: #8fffc1 !important;
        font-size: .8rem !important;
        font-weight: 750;
      }
      @media (max-width: 360px) {
        .gaPassaparola { grid-template-columns: 76px minmax(0, 1fr); padding: 11px; }
        .gaPassaparolaQr { width: 76px; height: 76px; }
        .gaShareActions { grid-template-columns: 1fr; }
      }
      @media (prefers-reduced-motion: no-preference) {
        .gaShareSheet { animation: gaShareIn .2s ease-out both; }
        @keyframes gaShareIn { from { opacity: 0; transform: translateY(12px) scale(.98); } }
      }
    `;
    document.head.appendChild(style);
  }

  function copyLink(feedback) {
    const done = () => {
      feedback.textContent = "Link copiato. Ora puoi inviarlo a chi vuoi.";
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(APP_URL).then(done).catch(() => fallbackCopy(done));
      return;
    }
    fallbackCopy(done);
  }

  function fallbackCopy(done) {
    const area = document.createElement("textarea");
    area.value = APP_URL;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); } catch (_) {}
    area.remove();
    done();
  }

  async function shareApp(feedback) {
    if (!navigator.share) {
      copyLink(feedback);
      return;
    }
    try {
      await navigator.share({
        title: "Grandine Alert",
        text: "Prova Grandine Alert: radar locale e stima del rischio grandine nelle prossime ore.",
        url: APP_URL
      });
      feedback.textContent = "Grazie per il passaparola!";
    } catch (error) {
      if (error && error.name !== "AbortError") copyLink(feedback);
    }
  }

  function closeShareModal() {
    const modal = document.getElementById(MODAL_ID);
    if (modal) modal.remove();
  }

  function openShareModal() {
    closeShareModal();

    const modal = document.createElement("div");
    modal.id = MODAL_ID;
    modal.className = "gaShareModal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Condividi Grandine Alert");
    modal.innerHTML = `
      <div class="gaShareSheet">
        <button class="gaShareClose" type="button" aria-label="Chiudi">×</button>
        <span class="gaShareEyebrow">PASSAPAROLA</span>
        <h2>Condividi Grandine Alert</h2>
        <p>Inquadra il QR con un altro telefono oppure invia direttamente il collegamento.</p>
        <div class="gaShareQrWrap"><img src="${QR_URL}" alt="QR code per aprire Grandine Alert"></div>
        <span class="gaShareUrl">${APP_URL}</span>
        <div class="gaShareActions">
          <button class="gaShareAction gaShareActionPrimary" type="button" data-ga-share>Condividi</button>
          <button class="gaShareAction" type="button" data-ga-copy>Copia link</button>
        </div>
        <p class="gaShareFeedback" role="status" aria-live="polite"></p>
      </div>
    `;

    const feedback = modal.querySelector(".gaShareFeedback");
    modal.querySelector(".gaShareClose").addEventListener("click", closeShareModal);
    modal.querySelector("[data-ga-share]").addEventListener("click", () => shareApp(feedback));
    modal.querySelector("[data-ga-copy]").addEventListener("click", () => copyLink(feedback));
    modal.addEventListener("click", event => {
      if (event.target === modal) closeShareModal();
    });
    document.body.appendChild(modal);
    modal.querySelector(".gaShareClose").focus();
  }

  function enhanceInfoPanel() {
    const sheet = document.querySelector(`.startModal[aria-label="${INFO_LABEL}"] .navHelpSheet`);
    if (!sheet || sheet.querySelector("[data-ga-passaparola]")) return;

    const section = document.createElement("section");
    section.className = "gaPassaparola";
    section.setAttribute("data-ga-passaparola", "");
    section.setAttribute("aria-label", "Passaparola Grandine Alert");
    section.innerHTML = `
      <img class="gaPassaparolaQr" src="${QR_URL}" alt="QR code Grandine Alert">
      <div class="gaPassaparolaCopy">
        <small>PASSAPAROLA</small>
        <strong>Condividi Grandine Alert</strong>
        <span>Mostra il QR oppure invia il link ad amici e familiari.</span>
      </div>
      <button class="gaPassaparolaOpen" type="button">Apri QR e condividi</button>
    `;
    section.querySelector("button").addEventListener("click", openShareModal);

    const confirmButton = sheet.querySelector(".startNow");
    sheet.insertBefore(section, confirmButton || null);
  }

  installStyles();
  enhanceInfoPanel();
  new MutationObserver(enhanceInfoPanel).observe(document.body, { childList: true, subtree: true });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeShareModal();
  });
})();
