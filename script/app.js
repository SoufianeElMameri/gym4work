const main = document.querySelector('main');
const page = new URLSearchParams(location.search).get('page') || 'home';
const path = page === 'home' ? '/' : '/' + page;
const arrow = '<span aria-hidden="true">↗</span>';
const cta = (audience, label) => `<a class="button dark" href="./index.html?page=contact&audience=${audience}">${label} ${arrow}</a>`;
const faq = (items) => `<section class="section faq"><h2>A few things worth knowing.</h2>${items.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</section>`;
if (path === '/gyms') {
  document.title = 'For gyms — More paying members. Same way of working. | Gym4Work';
  main.innerHTML = `<section class="hero subhero"><div class="hero-inner"><div class="eyebrow"><span class="little-line"></span> FOR LOCAL GYMS</div><h1>We bring the members.<br><span>You do what you do.</span></h1><p>Additional paying members from local companies.<br>We handle the arrangements. You welcome them as usual.</p>${cta('gym','Partner with us')}<div class="hero-note">No upfront fee.</div></div></section><div class="benefit-strip"><span>Your existing membership process</span><span>Your existing access system</span><span>We prepare your listing</span></div>
  <section class="gym-details" aria-labelledby="gym-details-title"><div class="gym-details-inner"><h2 id="gym-details-title">WE TAKE CARE<br>OF THE DETAILS</h2><div class="gym-details-stages"><article><h3>PREPARING<br>YOUR GYM</h3><p>We prepare your gym profile and offer, ready for you to review and approve.</p></article><article><h3>CONNECTING<br>WITH COMPANIES</h3><p>We find corporate demand and arrange the memberships companies choose to fund.</p></article><article><h3>HANDLING<br>THE DETAILS</h3><p>We handle company payments, employee allocation and the app. You welcome your members.</p></article></div><div class="gym-details-timeline"><i aria-hidden="true"></i><span>No upfront fee</span><i aria-hidden="true"></i><span>Your existing process</span><i aria-hidden="true"></i></div></div></section>
  <section class="gym-details gym-details-light" aria-labelledby="gym-part-title"><div class="gym-details-inner"><div class="gym-part-label">YOUR PART / THREE SIMPLE STEPS</div><h2 id="gym-part-title">BUSINESS AS USUAL.<br>WITH A FEW NEW FACES.</h2><div class="gym-details-stages"><article><h3>GIVE US<br>THE GO-AHEAD</h3><p>We prepare your gym’s information and offer. You review and approve it.</p></article><article><h3>CREATE THE<br>MEMBERSHIP</h3><p>When we bring a confirmed member, create their membership in the system you already use.</p></article><article><h3>SHARE THEIR<br>ACCESS CREDENTIAL</h3><p>Provide the digital barcode, QR code or badge from your existing process. We make it available in the employee’s app.</p></article></div><div class="gym-details-timeline"><i aria-hidden="true"></i><span>Your existing system</span><i aria-hidden="true"></i><span>Ready to welcome members</span><i aria-hidden="true"></i></div></div></section>
  <section class="closing"><div class="overline">A SIMPLE COMMERCIAL AGREEMENT</div><h2>We only earn<br>when we bring you members.</h2><p>No upfront fee. A small agreed fee only on the memberships we bring.<br>Payments go through the platform. Your share reaches you automatically.</p><span class="closing-note">Your existing members and the customers you find yourself stay completely separate.</span></section>
  ${faq([['Do we need different membership software?','No. You continue creating memberships through your existing process. We handle the company relationship, employee allocation, payments and employee app.'],['Do we need new access hardware?','No. You provide the resulting digital access credential from your existing membership process so it can appear in the employee’s app.'],['Who pays us, and what does it cost?','The company pays through Gym4Work and your share is paid to you automatically. We agree a small fee on the memberships we bring before you approve the offer. There is no upfront fee and no fee if we bring no memberships.'],['What happens after we get in touch?','We follow up to learn about your gym and prepare your profile and offer for approval. You don’t need to create a listing or set up a new system.']])}
  <section class="closing"><div class="overline">LET’S START WITH YOUR GYM</div><h2>We’ll take it from here.</h2><p>Tell us how to reach you. We’ll do the preparation.</p>${cta('gym','Partner with us')}</section>`;
} else if (path === '/companies') {
  document.title = 'For companies — Their choice of gym. Your choice of memberships. | Gym4Work';
  main.innerHTML = `<section class="hero subhero"><div class="hero-inner"><div class="eyebrow"><span class="little-line"></span> FOR COMPANIES</div><h1>Their choice of gym.<br><span>All in one place.</span></h1><p>Offer gym memberships your people actually want.<br>Choose what to fund. Manage the memberships and payments together.</p>${cta('company','Talk to us')}<div class="hero-note">Individual gym memberships. Easier to arrange.</div></div></section>
  <section class="gym-details gym-details-light" aria-labelledby="company-process-title"><div class="gym-details-inner"><h2 id="company-process-title">LISTEN TO YOUR PEOPLE.<br>THEN DECIDE WHAT WORKS.</h2><div class="gym-details-stages"><article><h3>SEE WHAT<br>PEOPLE WANT</h3><p>Employees browse available partner gyms and express interest. You see demand before deciding what to buy.</p></article><article><h3>CHOOSE WHAT<br>TO FUND</h3><p>Purchase the number of memberships you need at the gyms you choose. You decide the combination.</p></article><article><h3>MANAGE IT<br>IN ONE PLACE</h3><p>See the memberships your company owns, who holds each one and what’s unassigned. Assign or reassign memberships from one place.</p></article></div><div class="gym-details-timeline"><i aria-hidden="true"></i><span>Your people choose</span><i aria-hidden="true"></i><span>You decide what to fund</span><i aria-hidden="true"></i></div></div></section>
  <section class="allocation" aria-labelledby="allocation-title"><div class="allocation-heading"><h2 id="allocation-title">Their preferences.<br><span>Your decision.</span></h2><p>Your people tell you where they want to go.<br>Try choosing the memberships you’d fund.</p></div><div class="allocation-columns">${[{name:'FLYEfit',logo:'flyefit.svg',interest:5,value:5,dark:true},{name:'BD Gyms',logo:'bd-gyms.png',interest:10,value:10,dark:true},{name:'West Wood Club',logo:'west-wood.png',interest:3,value:0,dark:false}].map((gym,i)=>`<article class="allocation-gym"><div class="allocation-logo ${gym.dark?'allocation-logo-dark':''}"><img src="./assets/${gym.logo}" alt="${gym.name}"></div><p class="allocation-interest"><strong>${gym.interest}</strong> people interested</p><div class="allocation-count"><button type="button" data-allocation="${i}" data-change="-1" aria-label="Fund one fewer membership at ${gym.name}" ${gym.value===0?'disabled':''}>−</button><output id="allocation-count-${i}" aria-label="Memberships funded at ${gym.name}">${gym.value}</output><button type="button" data-allocation="${i}" data-change="1" aria-label="Fund one more membership at ${gym.name}">+</button></div><p class="allocation-count-label">memberships you fund</p><div class="allocation-people" id="allocation-people-${i}" aria-hidden="true">${Array.from({length:gym.interest},(_,n)=>`<i class="${n<gym.value?'funded':''}"></i>`).join('')}</div></article>`).join('')}</div><div class="allocation-summary"><p aria-live="polite" aria-atomic="true"><strong id="allocation-total">15</strong><span>memberships across <b id="allocation-gyms">2 gyms</b></span></p><div>One company. Different gyms.<br><span>You choose the combination.</span></div></div><p class="allocation-note">An example using Dublin gyms. Explore the numbers—this doesn’t place an order.</p></section>
  <section class="closing"><div class="overline">YOUR GYM CARD. ON YOUR PHONE.</div><h2>Phone. Keys. Gym.<br>One less card to carry.</h2><p>Once your membership is active, your gym’s access card is ready in the app.<br>Open it at the entrance and use your gym’s barcode, QR code or digital badge.<br>Your usual gym. Your normal membership. Just bring your phone.</p><span class="closing-note">Your digital card gives you access to your chosen gym.</span></section>
  ${faq([['What can our company manage?','You can see memberships your company owns, the gym each belongs to, the employee who currently holds it and any available, unassigned memberships. You can manage assignments and reassignments from one place.'],['Do employees get access to every partner gym?','Each membership is for a specific gym. Employees use the gym associated with their assigned membership.'],['Do we have to fund every gym employees request?','No. Employee interest shows you the demand. Your company decides which gyms to fund and how many memberships to purchase at each.'],['How are payments handled?','Payments are handled through the platform, with each gym receiving its share automatically. This brings payment administration for your chosen gym memberships into one place.']])}
  <section class="closing"><div class="overline">A BETTER FIT FOR YOUR PEOPLE</div><h2>Let’s start with your company.</h2><p>Tell us how to reach you. We’ll help you take the next step.</p>${cta('company','Talk to us')}</section>`;
} else if (path === '/contact') {
  document.title = 'Get in touch | Gym4Work';
  const company = new URLSearchParams(location.search).get('audience') === 'company';
  main.innerHTML = `<section class="contact-page"><div class="overline">LET’S MAKE THE CONNECTION</div><h1>${company ? 'A better fit for your people.' : 'Your next members start here.'}</h1><p>${company ? 'Tell us a little about your company. We’ll help you get started.' : 'Tell us how to reach you. We’ll follow up and prepare your gym’s profile and offer for you.'}</p><form class="contact-form" action="https://formspree.io/f/xrpblqar" method="POST"><div class="field"><label for="audience">I’m getting in touch for</label><select id="audience" name="audience"><option value="gym" ${company?'':'selected'}>A gym</option><option value="company" ${company?'selected':''}>A company</option></select></div><div class="field"><label for="organisation">Gym or company name</label><input id="organisation" name="organisation" autocomplete="organization" required maxlength="150" placeholder="Your organisation"></div><div class="field"><label for="name">Your name</label><input id="name" name="name" autocomplete="name" required maxlength="100" placeholder="First and last name"></div><div class="field"><label for="email">Work email</label><input id="email" type="email" name="email" autocomplete="email" required maxlength="254" placeholder="you@company.com"></div><p class="form-note" id="form-note">Send us your details and we’ll get in touch about your gym or company.</p><button class="button dark" type="submit">Send enquiry ${arrow}</button><div id="contact-status" class="contact-status hidden" role="status"></div></form></section>`;
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button.disabled || !form.reportValidity()) return;
    const status = document.querySelector('#contact-status');
    const originalLabel = button.innerHTML;
    const data = new FormData(form);
    data.set('message', 'Gym4Work enquiry from ' + data.get('organisation') + ' about ' + (data.get('audience') === 'gym' ? 'becoming a gym partner.' : 'company gym memberships.'));
    button.disabled = true;
    button.textContent = 'Sending…';
    form.setAttribute('aria-busy', 'true');
    status.setAttribute('role', 'status');
    status.textContent = 'Sending your enquiry…';
    status.classList.remove('hidden');
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        const message = Array.isArray(result.errors) ? result.errors.map(error => error.message).filter(Boolean).join(' ') : '';
        throw new Error(message || 'Your enquiry could not be sent. Please try again.');
      }
      form.reset();
      status.textContent = 'Thanks! Your enquiry has been sent. We’ll be in touch.';
    } catch (error) {
      status.setAttribute('role', 'alert');
      status.textContent = error instanceof TypeError
        ? 'We couldn’t confirm your enquiry was sent. Check your connection and try again. Your details are still here.'
        : error.message;
    } finally {
      button.disabled = false;
      button.innerHTML = originalLabel;
      form.removeAttribute('aria-busy');
    }
  });
} else if (path !== '/') {
  document.title = 'Page not found | Gym4Work';
  main.innerHTML = '<section class="contact-page"><div class="overline">404</div><h1>Let’s get you back.</h1><p>That page couldn’t be found.</p><a class="button dark" href="./index.html">Back to home ↗</a></section>';
}
const active = [...document.querySelectorAll('[data-nav]')].find(link => link.dataset.nav === page);
if(active) active.setAttribute('aria-current','page');
document.querySelector('.menu-toggle').addEventListener('click', e => {const open=document.querySelector('.header nav').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open));e.currentTarget.setAttribute('aria-label',open?'Close navigation':'Open navigation');e.currentTarget.textContent=open?'×':'☰';});
document.addEventListener('keydown', e => {if(e.key==='Escape'){document.querySelector('.header nav').classList.remove('open');const b=document.querySelector('.menu-toggle');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open navigation');b.textContent='☰';}});
document.querySelector('#year').textContent = new Date().getFullYear();

const siteHeader = document.querySelector('.header');
let headerFramePending = false;
function syncHeader() {
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 48);
  headerFramePending = false;
}
window.addEventListener('scroll', () => {
  if (!headerFramePending) {
    headerFramePending = true;
    requestAnimationFrame(syncHeader);
  }
}, { passive: true });
window.addEventListener('pageshow', syncHeader);
syncHeader();

const memberOptions = [...document.querySelectorAll('.member-option')];
if (memberOptions.length) {
  const members = [
    {name:'Sarah', location:'Dublin 2', gym:'FLYEfit', theme:'flyefit', logo:'./assets/flyefit.svg'},
    {name:'Adam', location:'Dublin 18', gym:'BD Gyms', theme:'bd', logo:'./assets/bd-gyms.png'},
    {name:'Chloe', location:'Dublin 6', gym:'West Wood Club', theme:'westwood', logo:'./assets/west-wood.png'}
  ];
  const card = document.querySelector('.access-card');
  const play = document.querySelector('.membership-play');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let selected = 0, paused = reducedMotion.matches, swap;
  function syncPlay() {
    play.textContent = paused ? 'Play ▷' : 'Pause ❚❚';
    play.setAttribute('aria-label', (paused ? 'Play' : 'Pause') + ' membership examples');
  }
  function showMember(index) {
    clearTimeout(swap);
    selected = index;
    card.classList.add('changing');
    swap = setTimeout(() => {
      const member = members[index];
      memberOptions.forEach((button, i) => {
        button.classList.toggle('selected', i === index);
        button.setAttribute('aria-pressed', String(i === index));
      });
      card.dataset.gym = member.theme;
      card.setAttribute('aria-label', `Example ${member.gym} membership for ${member.name}, ${member.location}`);
      const logo = card.querySelector('.access-logo');
      logo.src = member.logo; logo.alt = member.gym;
      card.querySelector('.access-name').textContent = member.name;
      card.querySelector('.access-location').textContent = member.location;
      document.querySelector('.membership-pointer span').textContent = `${member.name}’s membership`;
      card.classList.remove('changing');
    }, reducedMotion.matches ? 0 : 200);
  }
  memberOptions.forEach((button, i) => button.addEventListener('click', () => { paused = true; syncPlay(); showMember(i); }));
  play.addEventListener('click', () => { paused = !paused; syncPlay(); });
  syncPlay();
  setInterval(() => {
    const bounds = card.getBoundingClientRect();
    if (!paused && !document.hidden && bounds.top < innerHeight && bounds.bottom > 0) showMember((selected + 1) % members.length);
  }, 4500);
}

const allocation = document.querySelector('.allocation');
if (allocation) {
  const amounts = [5, 10, 0];
  allocation.addEventListener('click', event => {
    const control = event.target.closest('[data-allocation]');
    if (!control) return;
    const index = Number(control.dataset.allocation);
    amounts[index] = Math.max(0, Math.min(99, amounts[index] + Number(control.dataset.change)));
    document.querySelector(`#allocation-count-${index}`).textContent = amounts[index];
    allocation.querySelector(`[data-allocation="${index}"][data-change="-1"]`).disabled = amounts[index] === 0;
    allocation.querySelector(`[data-allocation="${index}"][data-change="1"]`).disabled = amounts[index] === 99;
    document.querySelectorAll(`#allocation-people-${index} i`).forEach((person, n) => person.classList.toggle('funded', n < amounts[index]));
    document.querySelector('#allocation-total').textContent = amounts.reduce((sum, number) => sum + number, 0);
    const gyms = amounts.filter(number => number > 0).length;
    document.querySelector('#allocation-gyms').textContent = `${gyms} ${gyms === 1 ? 'gym' : 'gyms'}`;
  });
}
