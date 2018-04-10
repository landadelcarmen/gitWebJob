import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
var modal = new Modal();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
