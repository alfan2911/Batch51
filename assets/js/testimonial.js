class Testimonial {
    constructor (author, quote, image) {
        this.author = author;
        this.quote = quote;
        this.image = image;
    }

    renderTestimonial() {
        return `<div class="testimonial">
        <img class="profile-testimonial" src="${this.image}" alt="profile">
        <p class="quote">${this.quote}</p>
        <p class="author">${this.author}</p>
    </div>`
    }

}

const testimonial1 = new Testimonial("Jhon", "Saya merasa puas dengan hasilnya", "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1699946988~exp=1699947588~hmac=7800fa0535a9b78a33d9667b2b3595b24a803f197136ca977df83583d46b54b1");
const testimonial2 = new Testimonial("Julia", "Masih ada beberapa bug", "https://img.freepik.com/free-photo/young-asian-woman-looks-with-confidence-cross-arms-chest-smiles-camera-stands-orange-sw_1258-167202.jpg?t=st=1699947064~exp=1699947664~hmac=bd933a626539594202f2e709cbf15f755103b041b2947e3740a55d83ab7a80f7");
const testimonial3 = new Testimonial("Rebecca", "Cukup memuaskan", "https://img.freepik.com/free-photo/joyful-confident-blonde-businesswoman-suit-smiling-isolated-modern-worker-secretary-executive-successful-cheerful-mood_197531-2109.jpg?w=996&t=st=1699947114~exp=1699947714~hmac=ac2e8bedbc222a6af1d35d0a2dc4fd58fbbed3e5e7ab9a81696a4f7f2f22ee8c");

const testimonials = [testimonial1, testimonial2, testimonial3]

let testimonialHTML = "";
for (let i = 0; i < testimonials.length; i++) {
    testimonialHTML += testimonials[i].renderTestimonial();
}

document.getElementById("testimonials").innerHTML = testimonialHTML;

