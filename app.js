// const searchInput = document.getElementById('searchInput');
// const searchBtn = document.getElementById('searchBtn');
// const profileContainer = document.getElementById('profileContainer');

// // GitHub User Fetch karne ka function
// const fetchGitHubUser = async (username) => {
//     try {
//         const res = await fetch(`https://api.github.com/users/${username}`);
//         if (!res.ok) throw new Error('User not found');
//         const user = await res.json();

//         displayProfile(user);
//     } catch (error) {
//         profileContainer.innerHTML = `<div class="text-danger text-center mt-3">${error.message}</div>`;
//     }
// };

// // User Profile ko display karne ka function
// const displayProfile = (user) => {
//     profileContainer.innerHTML = `
//         <div class="profile-card p-4 text-center">
//             <img src="${user.avatar_url}" alt="Profile Picture" class="img-thumbnail rounded-circle mb-3" style="width: 150px;">
//             <h3>${user.name || 'No Name'}</h3>
//             <p>@${user.login}</p>
//             <p>${user.bio || 'No bio available.'}</p>
//             <a href="${user.html_url}" target="_blank" class="btn btn-primary mt-2">View Profile</a>
//             <div class="mt-3">
//                 <span class="badge ">Public Repos: ${user.public_repos}</span>
//                 <span class="badge ">Followers: ${user.followers}</span>
//                 <span class="badge ">Following: ${user.following}</span>
//             </div>
//         </div>
//     `;
// };

// // Button click par search karna
// searchBtn.addEventListener('click', () => {
//     const username = searchInput.value.trim();
//     if (username) {
//         profileContainer.innerHTML = '<p>Loading...</p>';
//         fetchGitHubUser(username);
//     }
// });






const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const profileContainer = document.getElementById('profileContainer');

// GitHub User Fetch karne ka function
const fetchGitHubUser = async (username) => {
    try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error('User not found');
        const user = await res.json();

        displayProfile(user);
    } catch (error) {
        profileContainer.innerHTML = `<div class="text-danger text-center mt-3">${error.message}</div>`;
    }
};

// User Profile ko display karne ka function
const displayProfile = (user) => {
    profileContainer.innerHTML = `
        <div class="profile-card p-4 text-center">
            <img src="${user.avatar_url}" alt="Profile Picture" class="img-thumbnail rounded-circle mb-3" style="width: 150px;">
            <h3>${user.name || 'No Name'}</h3>
            <p>@${user.login}</p>
            <p>${user.bio || 'No bio available.'}</p>
            <a href="${user.html_url}" target="_blank" class="btn view-profile-btn mt-2">View Profile</a>
            <div class="mt-3">
                <span class="badge repos">Public Repos: ${user.public_repos}</span>
                <span class="badge followers">Followers: ${user.followers}</span>
                <span class="badge following">Following: ${user.following}</span>
            </div>
        </div>
    `;
};

// Button click par search karna
searchBtn.addEventListener('click', () => {
    const username = searchInput.value.trim();
    if (username) {
        profileContainer.innerHTML = '<p>Loading...</p>';
        fetchGitHubUser(username);
    }
});
