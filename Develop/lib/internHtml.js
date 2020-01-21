function generateHtml(data) {
    return `<div class="outer">
    <div class="box">
        <div class="heading">
            <h4>${data.name}</h4>
            <h4><i class="fas fa-user-graduate"></i> Intern</h4>
        </div>
        <div class="details">
            <div class="item">
                <p>ID: <span>${data.id}</span></p>
                <p>Email: <span class="link">${data.email}</span></p>
                <p class="last-item">School: <span>${data.school}</span></p>
            </div>
        </div>
    </div>
</div>`
}
module.exports = {generateHtml: generateHtml};