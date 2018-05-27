package com.malikov.shopsystem.service;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class RefreshEuroExchangeRateScheduledTask {

    private static final int TWENTY_MINUTES = 20 * 60 * 1000;
    private static final int THREE_HOURS = 3 * 60 * 60 * 1000;

    private final CurrencyService currencyService;

    public RefreshEuroExchangeRateScheduledTask(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    @Scheduled(fixedDelay = TWENTY_MINUTES, initialDelay = THREE_HOURS)
    public void refreshEuroExchangeRate() {
        currencyService.scheduledCurrenciesUpdate();
    }

}
