document.addEventListener('DOMContentLoaded', () => {

    // 1. Триггер батырмалар мен сілтемелерді анықтау
    const openDownloadBtn = document.getElementById("openDownloadModalBtn");
    const openPricingNavBtn = document.getElementById("openPricingNavBtn");
    const openPricingHeroBtn = document.getElementById("openPricingHeroBtn");
    const openSupportBtn = document.getElementById("openSupportModalBtn");
    
    // 👇 БҰРЫНҒЫ ЖӘНЕ ЖАҢА ТРИГГЕРЛЕР: Подключить және Купить батырмалары
    const openSuccessImageBtn = document.getElementById("openSuccessImageBtn"); 
    const openBuyImageBtn = document.getElementById("openBuyImageBtn"); // 👈 ЖАҢА АЙНЫМАЛЫ

    // 2. Модальді терезелерді анықтау
    const downloadModal = document.getElementById("downloadModal");
    const pricingModal = document.getElementById("pricingModal");
    const supportModal = document.getElementById("supportModal");
    const imageModal = document.getElementById("imageModal"); 

    // 3. Модальді ашу функциясы
    function openModal(modal) {
        if (modal) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    }

    // 4. Модальді жабу функциясы (Барлық модальдарды жабады)
    function closeAllModals() {
        if (downloadModal) downloadModal.style.display = "none";
        if (pricingModal) pricingModal.style.display = "none";
        if (supportModal) supportModal.style.display = "none";
        if (imageModal) imageModal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // 5. Триггерлерге оқиғаларды қосу

    // Әдепкі модальдар
    if (openDownloadBtn) openDownloadBtn.onclick = (e) => { e.preventDefault(); openModal(downloadModal); };
    if (openPricingNavBtn) openPricingNavBtn.onclick = (e) => { e.preventDefault(); openModal(pricingModal); };
    if (openPricingHeroBtn) openPricingHeroBtn.onclick = (e) => { e.preventDefault(); openModal(pricingModal); };
    if (openSupportBtn) openSupportBtn.onclick = (e) => { e.preventDefault(); openModal(supportModal); };
    
    // 👇 "ПОДКЛЮЧИТЬ" БАТЫРМАСЫНЫҢ ЛОГИКАСЫ (Подписка)
    function handlePricingClick(e) {
        e.preventDefault(); 
        if (pricingModal) pricingModal.style.display = "none";
        openModal(imageModal); 
    }
    
    if (openSuccessImageBtn) {
        openSuccessImageBtn.onclick = handlePricingClick;
    }
    
    // 👇 "КУПИТЬ" БАТЫРМАСЫНЫҢ ЛОГИКАСЫ (Аренда сервера)
    if (openBuyImageBtn) {
        openBuyImageBtn.onclick = handlePricingClick; // Бірдей функцияны қолданамыз
    }


    // 6. Жабу батырмаларын басқару (X батырмасы)
    document.querySelectorAll('.close-button').forEach(button => {
        button.onclick = closeAllModals;
    });

    // 7. Сыртқы аймақты басқанда жабу
    window.onclick = function(event) {
        if (event.target == downloadModal || 
            event.target == pricingModal || 
            event.target == supportModal ||
            event.target == imageModal) 
        {
            closeAllModals();
        }
    }
});