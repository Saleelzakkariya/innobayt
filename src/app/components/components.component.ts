import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})

export class ComponentsComponent implements OnInit {
    services = [
        {
            serviceName: 'SEO SERVICES',
            imagePath: 'assets/img/service/SEO.jpeg',
            content: 'Content Writing & Optimization - On-page & Off-page Optimization - Keyword Analysis - Optimization - Monthly Reports - Conversion Rate Optimization'
        },
        {
            serviceName: 'APP DEVELOPMENT',
            imagePath: 'assets/img/service/appdevelopment.jpg',
            content: 'Enterprise Management Solutions - Cross Platform Apps - Universal Windows Apps - Android Apps - iOS Apps - Xamarin Mobile Apps'
        },
        {
            serviceName: 'SMART CITY SOLUTIONS',
            imagePath: 'assets/img/service/smartcity.jpg',
            content: 'Sensing - Communication - Data Management - Applications - Centralized Command & Control - Data Security - Analytics'
        },
        {
            serviceName: 'WEB DESIGN',
            imagePath: 'assets/img/service/webdevelopment.jpg',
            content: 'Responsive Websites - E-Commerce Websites - CMS Websites - Mobile friendly UI - Flexible Hosting Plans - Website Maintenance Contracts'
        },
        {
            serviceName: 'WEB APP PENTESTING',
            imagePath: 'assets/img/service/webPenesting.jpg',
            content: 'Web Application Assessment - Webapplications - Thick Client applications - Android/iOS applications - Outsurce security assessments'
        },
        {
            serviceName: 'IMMERSIVE APPS',
            imagePath: 'assets/img/service/immersive.jpg',
            content: 'Augmented Reality - Virtual Reality - HoloLens - Gear VR Apps - Interactive Print Advertising - Gesture Recogniton - Voice Interaction'
        },
        {
            serviceName: 'INTELLIGENT APPS',
            imagePath: 'assets/img/service/innteligent.jpeg',
            content: 'Smart Apps - Artificial Intelligence - Chat Bots - Facial Recognition - Kinect Apps - Emotion Recognition - Internet Of Things (IoT) Apps'
        },
        // {
        //     serviceName: 'POWER YOUR APPS',
        //     imagePath:'',
        //     content:'Consult us to know how we could help you power your existing apps by adding innovative features or intelligence to your apps.'
        // },
        {
            serviceName: 'DIGITAL MARKETING',
            imagePath: 'assets/img/service/digital.jpeg',
            content: 'Email Marketing - Social Media Marketing - 2D Animation Advertisements - Creative Solutions - Branding Services'
        }
    ]
    selectedService: any = {};
    projects = [
        {
            imagePath: 'assets/img/project/marine.jpg',
            projectName: 'GULF MARINE SERVICE',
            manages: 'Website'
        },
        {
            imagePath: 'assets/img/project/sand.jfif',
            projectName: 'SANDS PRO SERVICES',
            manages: ''
        },
        {
            imagePath: 'assets/img/project/animation.jpg',
            projectName: '2D ANIMATION',
            manages: ''
        },
        {
            imagePath: 'assets/img/project/fastpro.png',
            projectName: 'FASTPRO',
            manages: ''
        },
        {
            imagePath: 'assets/img/project/sandApp.png',
            projectName: 'SANDS PRO APP',
            manages: ''
        },
        {
            imagePath: 'assets/img/project/app1.png',
            projectName: 'FASTPRO APP',
            manages: ''
        },
        {
            imagePath: 'assets/img/project/app2.png',
            projectName: 'Native Mobile App',
            manages: ''
        }, 
        {
            imagePath: 'assets/img/project/ridge.png',
            projectName: 'RIDGE ENGINEERING',
            manages: ''
        }
    ]
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: { year: number, month: number };
    model: NgbDateStruct;
    constructor(private renderer: Renderer2) { }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
        this.selectedService = this.services[0];
    }
    onSlide(event: NgbSlideEvent) {
        console.log(event);
        this.selectedService = this.services[event.current];
        // const imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
        // console.log("image index", imageIndex);
        // if (this.unpauseOnArrow && slideEvent.paused &&
        //   (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
        //   this.togglePaused();
        // }
        // if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
        //   this.togglePaused();
        // }
    }
}
