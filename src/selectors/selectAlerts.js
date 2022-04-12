export const selectAlerts = state => {
    const alerts = state.alertsToShow.alerts;
    const allAlerts = [];
    for(let key in alerts) {
        allAlerts.push(alerts[key]);
    }
    return allAlerts;
};