package com.rmondal.lostAndFoundBackend.controller;

import com.rmondal.lostAndFoundBackend.model.Item;
import com.rmondal.lostAndFoundBackend.model.ItemStatus;
import com.rmondal.lostAndFoundBackend.repository.ItemRepository;
import com.rmondal.lostAndFoundBackend.service.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/items")
@CrossOrigin(origins = "*")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    @GetMapping
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @PostMapping
    public Item createItem(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("category") String category,
            @RequestParam("location") String location,
            @RequestParam("status") String status,
            @RequestParam("dateLostorFound") String date,
            @RequestParam(value = "image", required = false)MultipartFile imageFile
            ) {

        Item item=new Item();
        item.setName(name);
        item.setCategory(category);;
        item.setStatus(ItemStatus.valueOf(status));
        item.setLocation(location);
        item.setDescription(description);
        item.setDateLostorFound(LocalDate.parse(date));

        if(imageFile!=null && !imageFile.isEmpty()) {
            try {
                String imageUrl=cloudinaryService.uploadFile(imageFile);
                item.setImageUrl(imageUrl);
            }
            catch (Exception e) {
                e.printStackTrace();
            }
        }
        return itemRepository.save(item);
    }
}
