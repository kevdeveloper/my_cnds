!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).charming=e()}}(function(){return function(){return function e(n,t,r){function o(f,u){if(!t[f]){if(!n[f]){var c="function"==typeof require&&require;if(!u&&c)return c(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var d=t[f]={exports:{}};n[f][0].call(d.exports,function(e){return o(n[f][1][e]||e)},d,d.exports,e,n,t,r)}return t[f].exports}for(var i="function"==typeof require&&require,f=0;f<r.length;f++)o(r[f]);return o}}()({1:[function(e,n,t){n.exports=function(e,{tagName:n="span",split:t,setClassName:r=function(e){return"char"+e}}={}){e.normalize();let o=1;function i(e){const i=e.parentNode,f=e.nodeValue;(t?t(f):f.split("")).forEach(function(t){const f=document.createElement(n),u=r(o++,t);u&&(f.className=u),f.appendChild(document.createTextNode(t)),f.setAttribute("aria-hidden","true"),i.insertBefore(f,e)}),""!==f.trim()&&i.setAttribute("aria-label",f),i.removeChild(e)}!function e(n){if(3===n.nodeType)return i(n);const t=Array.prototype.slice.call(n.childNodes);if(1===t.length&&3===t[0].nodeType)return i(t[0]);t.forEach(function(n){e(n)})}(e)}},{}]},{},[1])(1)});

const d = 40;

document.querySelectorAll('.rocket-button').forEach(elem => {

    elem.querySelectorAll('.default, .success > div').forEach(text => {
        charming(text);
        text.querySelectorAll('span').forEach((span, i) => {
            span.innerHTML = span.textContent == ' ' ? '&nbsp;' : span.textContent;
            span.style.setProperty('--d', i * d + 'ms');
            span.style.setProperty('--ds', text.querySelectorAll('span').length * d - d - i * d + 'ms');
        });
    });

    elem.addEventListener('click', e => {
        e.preventDefault();
        if(elem.classList.contains('animated')) {
            return;
        }
        elem.classList.add('animated');
        elem.classList.toggle('live');
        setTimeout(() => {
            elem.classList.remove('animated');
        }, 2400);
    });

});
