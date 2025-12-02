package com.rmondal.lostAndFoundBackend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @Column(length = 1500, updatable = true, nullable = false)
    private String description;

    private String category;

    private String imageUrl;

    private String location;

    private LocalDate dateLostorFound;

    @Enumerated(EnumType.STRING)
    private ItemStatus status;


}
