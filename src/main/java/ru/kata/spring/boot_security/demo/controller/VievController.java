package ru.kata.spring.boot_security.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VievController {
    @GetMapping("/adminPanel")
    public String showAllUser(Model model) {
        return "adminPanel";
    }

    @GetMapping("/user")
    public String showOneUser() {
        return "userPage";
    }
}
