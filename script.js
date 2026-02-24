let activeCategory = 'all';

function refreshDashboard() {
    const jobItems = document.querySelectorAll('.job-item');
    
    const totalCount = jobItems.length;
    const interviewCount = document.querySelectorAll('.job-item[data-status="interview"]').length;
    const rejectedCount = document.querySelectorAll('.job-item[data-status="rejected"]').length;

    document.getElementById('total-jobs-count').innerText = totalCount;
    document.getElementById('interview-jobs-count').innerText = interviewCount;
    document.getElementById('rejected-jobs-count').innerText = rejectedCount;

    let itemsShown = 0;
    jobItems.forEach(card => {
        const currentStatus = card.getAttribute('data-status');
        if (activeCategory === 'all' || currentStatus === activeCategory) {
            card.classList.remove('is-hidden');
            itemsShown++;
        } else {
            card.classList.add('is-hidden');
        }
    });

    document.getElementById('results-counter').innerText = `${itemsShown} jobs`;

    const emptyView = document.getElementById('no-data-view');
    emptyView.classList.toggle('is-hidden', itemsShown > 0);
}

window.updateStatus = (btn, newStatus) => {
    const card = btn.closest('.job-item');
    const label = card.querySelector('.status-label');
    const currentStatus = card.getAttribute('data-status');

    const finalStatus = (currentStatus === newStatus) ? 'none' : newStatus;
    
    card.setAttribute('data-status', finalStatus);
    label.innerText = finalStatus === 'none' ? 'NOT APPLIED' : finalStatus.toUpperCase();

    card.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
    if (finalStatus !== 'none') {
        card.querySelector(`.btn-action-${finalStatus}`).classList.add('active');
    }

    refreshDashboard();
};

window.deleteJob = (btn) => {
    const card = btn.closest('.job-item');
    card.remove();
    refreshDashboard();
};

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        activeCategory = btn.dataset.tab;
        refreshDashboard();
    });
});

refreshDashboard();