/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.etop.odbs.controller;

import com.etop.odbs.beans.User;
import com.etop.odbs.service.UserService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

/**
 *
 * @author cjh
 */
@Controller
@SessionAttributes("loginUser")
public class UserController {

    @Resource(name = "userService")
    private UserService userService;

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        System.out.println("setUserService------------------->" + userService);
        this.userService = userService;
    }

    @RequestMapping(value = {"/load"}, method = RequestMethod.GET)
    public String load() {
        return "user/load";
    }

    @RequestMapping(value = {"/load"}, method = RequestMethod.POST)
    public String load(String name, String password,Model model) {
        User u = userService.load(name, password);
        
        if(u!=null){
        System.out.println(u.toString());
        
        model.addAttribute("loginUser", u);
        return "user/login";
        }
        return "redect:/load";
    } 
}
