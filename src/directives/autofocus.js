import Vue from 'vue';
import $ from 'jquery';

Vue.directive('autofocus', {
    inserted: fn,
    update: fn
});

function fn(el, binding) {
    if (binding.value === undefined && el.hasAutoFocused) return;
    if (binding.value !== undefined && !binding.value) return;
    if (binding.oldValue !== undefined && binding.value == binding.oldValue) return;
    el.hasAutoFocused = true;
    el = ['BUTTON','INPUT','TEXTAREA','SELECT'].indexOf(el.tagName) > -1 ? el : $(el).find('input:first')[0];
    setTimeout(() => el.focus(), 10);
}