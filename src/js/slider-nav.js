import Glide from '@glidejs/glide'

const sliderMenu = new Glide('.glide-menu', { perView: 4, type: 'carousel', startAt: -1 }).mount();

export default sliderMenu;