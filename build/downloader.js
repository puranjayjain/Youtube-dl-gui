(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// a web worker instance of this file which will be used for interaction with node youtube dl
importScripts('../require.js');

// import fs from 'fs'
// import youtubedl from 'youtube-dl'

// onmessage = (e) => {
//   console.log('Message received from main script')
//   postMessage('yolo' + e.data)
// }

require({
    baseUrl: './'
}, ['require', 'fs', 'youtube-dl'], function (require, fs, youtubedl) {
    postMessage('yolo' + e.data);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGJhY2tncm91bmRcXGRvd25sb2FkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNDQSxjQUFjLGVBQWQ7Ozs7Ozs7Ozs7QUFVQSxRQUFRO0FBQ0EsYUFBUztBQURULENBQVIsRUFHSSxDQUFDLFNBQUQsRUFBWSxJQUFaLEVBQWtCLFlBQWxCLENBSEosRUFJSSxVQUFDLE9BQUQsRUFBVSxFQUFWLEVBQWMsU0FBZCxFQUE0QjtBQUN4QixnQkFBWSxTQUFTLEVBQUUsSUFBdkI7QUFDSCxDQU5MIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGEgd2ViIHdvcmtlciBpbnN0YW5jZSBvZiB0aGlzIGZpbGUgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBpbnRlcmFjdGlvbiB3aXRoIG5vZGUgeW91dHViZSBkbFxyXG5pbXBvcnRTY3JpcHRzKCcuLi9yZXF1aXJlLmpzJylcclxuXHJcbi8vIGltcG9ydCBmcyBmcm9tICdmcydcclxuLy8gaW1wb3J0IHlvdXR1YmVkbCBmcm9tICd5b3V0dWJlLWRsJ1xyXG5cclxuLy8gb25tZXNzYWdlID0gKGUpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZygnTWVzc2FnZSByZWNlaXZlZCBmcm9tIG1haW4gc2NyaXB0JylcclxuLy8gICBwb3N0TWVzc2FnZSgneW9sbycgKyBlLmRhdGEpXHJcbi8vIH1cclxuXHJcbnJlcXVpcmUoe1xyXG4gICAgICAgIGJhc2VVcmw6ICcuLydcclxuICAgIH0sXHJcbiAgICBbJ3JlcXVpcmUnLCAnZnMnLCAneW91dHViZS1kbCddLFxyXG4gICAgKHJlcXVpcmUsIGZzLCB5b3V0dWJlZGwpID0+IHtcclxuICAgICAgICBwb3N0TWVzc2FnZSgneW9sbycgKyBlLmRhdGEpXHJcbiAgICB9XHJcbilcclxuIl19